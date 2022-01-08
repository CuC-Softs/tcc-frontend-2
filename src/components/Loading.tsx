import styled from 'styled-components'

interface LoadingProps {
  position?: 'fixed' | 'absolute'
  open?: boolean
  onRequestClose?: () => void
  message?: string
}

const Loading: React.FC<LoadingProps> = ({
  position,
  open,
  onRequestClose,
  message
}) =>
  open === undefined || open ? (
    <Container
      position={position}
      type="button"
      onClick={() => onRequestClose && onRequestClose()}
    >
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
      {message && <h6>{message}</h6>}
    </Container>
  ) : null

export default Loading

const Container = styled.button`
  position: ${(p: { position?: 'absolute' | 'fixed' }) =>
    p.position || 'fixed'};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease-in;
  z-index: 10000000000000;
  cursor: progress !important;
  flex-direction: column;
  border: 0;

  h6 {
    color: #fff;
    text-align: center;
    position: relative;
    top: 2rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`
