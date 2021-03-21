import styled from 'styled-components';
import Icon from './Icon';

const StyledBack = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`;

const Back = ({ icon = 'caretleft', value = 'Назад', onClick }: any) => {
  const goBack = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <StyledBack onClick={goBack}>
      {icon && <Icon name={icon} width={8} margin={[0, 10, 0, 0]} />}{' '}
      {value && <span>{value}</span>}
    </StyledBack>
  );
};

export default Back;
