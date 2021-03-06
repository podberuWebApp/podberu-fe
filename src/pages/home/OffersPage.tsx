import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Back from '../../components/Back';
import { SmallCard } from '../../components/Card';
import Pagination from '../../components/Pagination';
import { getTitle, ROUTES } from '../../utilities/constants';
import { getOffersByType } from '../../api';
import { OfferType } from '../../utilities/models';

const StyledDebitCards = styled.div`
  section {
    min-height: 500px;
    padding: 70px;

    > * {
      max-width: 1156px;
      margin: auto;
    }

    @media only screen and (max-width: 767px) {
      padding: 40px;
    }

    > h2 {
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 34px;
      text-align: center;
      line-height: 1.4;
      position: relative;
      width: 100%;

      > div {
        position: absolute;
        top: 10px;
      }
    }
  }
`;
// export type OffersPageProps = { cardsType: string | undefined; bankName: string | undefined };

const OffersPage = () => {
  const history = useHistory();
  const { offerType } = useParams<{ offerType: string }>();
  const title = useMemo(() => getTitle(offerType), [offerType]);

  const [offers, setOffers] = useState<OfferType[] | null>(null);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const registerDeal = useCallback(
    (bankName) => (e: any) => {
      // eslint-disable-next-line no-console
      console.log(e);
      history.push({
        pathname: ROUTES.REGISTER.path
          .replace(':offerType', offerType)
          .replace(':bankName', bankName),
      });
    },
    []
  );

  useEffect(() => {
    getOffersByType(offerType)
      .then((responseInfo) => {
        // const { response, message, status, error } = data;
        const { data }: { data: OfferType[] } = responseInfo;
        // console.log(response);
        // eslint-disable-next-line no-console
        setOffers(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  return (
    <StyledDebitCards>
      <section className="secondary">
        <h2>
          <Back />
          {title}
        </h2>
        <Row>
          {offers?.map((offer) => (
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title={offer.name}
                subtitle={offer.header}
                body={offer.description}
                icon="typography"
                button={{
                  value: '??????????????????',
                  size: 'md',
                  onClick: registerDeal(offer.name),
                  margin: [24, 0, 0, 0],
                  padding: [0, 24],
                  // fontSize: 18,
                }}
              />
            </Col>
          ))}
        </Row>
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '10px auto', opacity: 0.8 }}
        >
          ???????????????? ??????
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '30px 0' }}>
          <Pagination />
        </div>
      </section>
    </StyledDebitCards>
  );
};

export default OffersPage;
