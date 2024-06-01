import { FunctionComponent, PropsWithChildren } from 'react'
import './modal.css'
import { Trans } from '@lingui/macro'

type Props = PropsWithChildren<{
  show: boolean
  onClose: () => void
}>

export const Modal: FunctionComponent<Props> = ({ show, onClose, children }) => (
  <div
    aria-modal="true"
    role="dialog"
    className="modal"
    style={show ? {} : { display: 'none' }}
    onClick={onClose}>
    <section
      className="modal-main"
      onClick={(e) => {
        e.stopPropagation()
      }}>
      {children}
      <button
        type="button"
        onClick={onClose}
        className="primary"
        style={{ marginTop: 20, width: 'fit-content', alignSelf: 'center' }}>
        <Trans>Close</Trans>
      </button>
    </section>
  </div>
)