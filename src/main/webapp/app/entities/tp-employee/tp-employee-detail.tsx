import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './tp-employee.reducer';
import { ITPEmployee } from 'app/shared/model/tp-employee.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITPEmployeeDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TPEmployeeDetail = (props: ITPEmployeeDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { tPEmployeeEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="gmibankfrontendApp.tPEmployee.detail.title">TPEmployee</Translate> [<b>{tPEmployeeEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="firstName">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.firstName">First Name</Translate>
            </span>
          </dt>
          <dd>{tPEmployeeEntity.firstName}</dd>
          <dt>
            <span id="lastName">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.lastName">Last Name</Translate>
            </span>
          </dt>
          <dd>{tPEmployeeEntity.lastName}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.email">Email</Translate>
            </span>
          </dt>
          <dd>{tPEmployeeEntity.email}</dd>
          <dt>
            <span id="hireDate">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.hireDate">Hire Date</Translate>
            </span>
          </dt>
          <dd>
            {tPEmployeeEntity.hireDate ? <TextFormat value={tPEmployeeEntity.hireDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="mobilePhoneNumber">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.mobilePhoneNumber">Mobile Phone Number</Translate>
            </span>
          </dt>
          <dd>{tPEmployeeEntity.mobilePhoneNumber}</dd>
          <dt>
            <span id="phoneNumber">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.phoneNumber">Phone Number</Translate>
            </span>
          </dt>
          <dd>{tPEmployeeEntity.phoneNumber}</dd>
          <dt>
            <span id="zipCode">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.zipCode">Zip Code</Translate>
            </span>
          </dt>
          <dd>{tPEmployeeEntity.zipCode}</dd>
          <dt>
            <span id="address">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.address">Address</Translate>
            </span>
          </dt>
          <dd>{tPEmployeeEntity.address}</dd>
          <dt>
            <span id="city">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.city">City</Translate>
            </span>
          </dt>
          <dd>{tPEmployeeEntity.city}</dd>
          <dt>
            <span id="ssn">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.ssn">Ssn</Translate>
            </span>
          </dt>
          <dd>{tPEmployeeEntity.ssn}</dd>
          <dt>
            <span id="createDate">
              <Translate contentKey="gmibankfrontendApp.tPEmployee.createDate">Create Date</Translate>
            </span>
          </dt>
          <dd>
            {tPEmployeeEntity.createDate ? <TextFormat value={tPEmployeeEntity.createDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPEmployee.country">Country</Translate>
          </dt>
          <dd>{tPEmployeeEntity.country ? tPEmployeeEntity.country.name : ''}</dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPEmployee.state">State</Translate>
          </dt>
          <dd>{tPEmployeeEntity.state}</dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPEmployee.user">User</Translate>
          </dt>
          <dd>{tPEmployeeEntity.user ? tPEmployeeEntity.user.id : ''}</dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPEmployee.manager">Manager</Translate>
          </dt>
          <dd>{tPEmployeeEntity.manager ? tPEmployeeEntity.manager.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/tp-employee" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tp-employee/${tPEmployeeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ tPEmployee }: IRootState) => ({
  tPEmployeeEntity: tPEmployee.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPEmployeeDetail);
