import { ReactNode } from 'react';
import './Modal.scss';

interface ModalProps {
    header?: ReactNode;
    hidden?: boolean;
    hiddenModal?: (name) => void;
    children?: ReactNode;
    sales?: true;
}

export const Modal = (props: ModalProps) => {
    const {
        header,
        hidden = true,
        hiddenModal,
        children,
        sales
    } = props;

    if (hidden) {
        return;
    }
    return (
        <div className={'modal_background'} onClick={hiddenModal}>
            <div className="modal_window" onClick={(e) => e.stopPropagation()}>
            <div className='modal_close_elem' onClick={hiddenModal}>X</div>
                {sales ? <div className='modal_container_header_sales'>
                    <h3 className='modal_header_sales'>{header}</h3>
                </div> : <div>
                    <h3 className='modal_header'>{header}</h3>
                    </div>}
                <div className='modal_content'>{children}</div>
                {sales ? <p className='modal_spoiler'>Вы можете отключить подсказки, нажав на шестеренку в правом верхнем углу</p> : ''}
            </div>
        </div>
    );
};