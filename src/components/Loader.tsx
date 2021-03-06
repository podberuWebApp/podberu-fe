import styled from 'styled-components';

const StyledLoader = styled.div<{ color: string }>`
  height: inherit;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  /* Loader 3 */
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    margin: 3px;
    border: 3px solid ${({ color }) => (color === 'white' ? '#ffffff' : '#09244c')};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => (color === 'white' ? '#ffffff' : '#09244c')} transparent
      transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({ color = '#2758a2' }: any) => {
  return (
    <StyledLoader color={color}>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledLoader>
  );
};

export default Loader;
