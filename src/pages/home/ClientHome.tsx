import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Tabs from '../../components/Tabs';
import CardsRow from './components/CardsRow';
import { IconCard, LargeCard, SmallCard } from '../../components/Card';
import { getDefaultCard, ROUTES } from '../../utilities/constants';
import InfoColumn from './components/InfoColumn';
import { OfferType } from '../../utilities/models';
import { getOffersTypes } from '../../api';
import { getIcon } from './AgentHome';

type UsefulInfo = {
  title: string;
  links: string[];
}[];

// Multiple rows
const usefulInfo: UsefulInfo[] = [
  [
    {
      title: 'Кредиты',
      links: ['Без справок о доходах', 'В день обращения', 'Самые выгодные', 'Наличными'],
    },
    {
      title: 'Карты',
      links: ['БС овердрафтом', 'Бесплатные', 'С кэшбэком', 'Доходные'],
    },
    {
      title: 'Микрозаймы',
      links: ['На карту', 'Под ПТС', 'Без процентов', 'На Киви'],
    },
    {
      title: 'Страхование',
      links: [
        'ОСАГО онлайн',
        'КАСКО',
        'Страхование для путешественников',
        'Страхование ипотеки',
        'Страхование недвижимости',
        'Страхование от несчастных случаев',
      ],
    },
  ],
  [
    {
      title: 'Вклады',
      links: ['Мультивалютные', 'Самые выгодные', 'С пополнением', 'Пенсионные'],
    },
    {
      title: 'Карты',
      links: ['БС овердрафтом', 'Бесплатные', 'С кэшбэком', 'Доходные'],
    },
    {
      title: 'Микрозаймы',
      links: ['На карту', 'Под ПТС', 'Без процентов', 'На Киви'],
    },
    {
      title: 'Продукты в банках',
      links: [
        'Вклады в банках',
        'Кредиты в банках',
        'Ипотека в банках',
        'Кредитные карты в банках',
        'Дебетовые карты в банках',
        'Автокредиты в банках',
      ],
    },
  ],
];

const ClientHome = () => {
  const history = useHistory();

  const openOffersByType = useCallback(
    (offerType) => (e: any) => {
      // eslint-disable-next-line no-console
      console.log(e.target);
      history.push({
        pathname: ROUTES.OFFERS_BY_TYPE.path.replace(':offerType', offerType),
      });
    },
    []
  );

  const defaultColStyles = { marginBottom: 24 };
  const infoColStyles = { marginBottom: 48 };
  const sectionStyle = { padding: '32px 0' };

  const creditCardsInfo = new Array(3).fill(getDefaultCard(() => {}));
  const [offersTypes, setOffersTypes] = useState<OfferType[] | null>(null);

  useEffect(() => {
    getOffersTypes()
      .then((responseInfo) => {
        // const { response, message, status, error } = data;
        const { data }: { data: OfferType[] } = responseInfo;
        // console.log(response);
        // eslint-disable-next-line no-console
        setOffersTypes(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section style={sectionStyle}>
        <h2>Добрый день!</h2>
        <Row>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="Дебетовые карты"
              subtitle="Сегодня оформить дебетовую карту предлагает своим клиентам практически любой банк."
              button={{ value: 'Смотреть предложения', group: 'purple' }}
              icon="cards"
            />
          </Col>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="Микрозаймы"
              subtitle="Выгодные займы с онлайн заявкой! Одобрение за 5 минут! Минимальный пакет документов!"
              button={{ value: 'Смотреть предложения', group: 'green' }}
              icon="microzaim"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="Кредитные карты"
              subtitle="Сегодня оформить кредитную карту предлагает своим клиентам практически любой банк."
              button={{ value: 'Смотреть предложения', group: 'purple' }}
              icon="cards"
            />
          </Col>
          <Col md={6} style={defaultColStyles}>
            <LargeCard
              title="РКО"
              subtitle="Комплекс услуг, которые предлагаются при открытии расчетного счета для бизнесменов."
              button={{ value: 'Смотреть предложения', group: 'orange' }}
              icon="credits"
            />
          </Col>
        </Row>
      </section>

      <section style={sectionStyle}>
        <h2>Список продуктов</h2>
        <Row>
          {offersTypes &&
            offersTypes.map(({ id, name, header, description, type }) => (
              <Col key={type} md={4} style={{ marginBottom: 24, padding: '0 12px' }}>
                <SmallCard
                  key={`${type}-${id}`}
                  title={name}
                  subtitle={[description]}
                  icon={getIcon(type)}
                  onClick={openOffersByType(type)}
                />
              </Col>
            ))}
        </Row>
      </section>

      <section style={{ minHeight: 100, ...sectionStyle }}>
        <h2>Лучшие предложения</h2>
        <Row>
          <Col>
            <Tabs
              header={[
                { value: 0, label: 'Кредитные карты' },
                { value: 1, label: 'Дебетовые карты' },
                { value: 2, label: 'Кредиты' },
                { value: 3, label: 'Микрозаймы' },
                { value: 4, label: 'Все предложения' },
              ]}
              data={{
                0: <CardsRow cardsInfo={creditCardsInfo} />,
                1: 'Дебетовые карты',
                2: 'Кредиты',
                3: 'Микрозаймы',
                4: 'Все предложения',
              }}
            />
          </Col>
        </Row>
      </section>

      <section style={{ minHeight: 100, ...sectionStyle }}>
        <h2>Наши партнёры</h2>
        <Row>
          <Col>
            <IconCard icon="typography" />
          </Col>
          <Col>
            <IconCard icon="typography" />
          </Col>
          <Col>
            <IconCard icon="typography" />
          </Col>
          <Col>
            <IconCard icon="typography" />
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <a>Посмотреть всех</a>
        </div>
      </section>

      <section style={{ minHeight: 100 }} className="useful-info">
        <h2>Полезная информация</h2>
        {usefulInfo.map((rowItems, rowIndex) => (
          <Row>
            {rowItems.map(({ title, links }) =>
              // Last row is without bottom margins
              usefulInfo.length - 1 === rowIndex ? (
                <Col>
                  <InfoColumn headingText={title} links={links} />
                </Col>
              ) : (
                <Col style={infoColStyles}>
                  <InfoColumn headingText={title} links={links} />
                </Col>
              )
            )}
          </Row>
        ))}
      </section>
    </>
  );
};

export default ClientHome;
