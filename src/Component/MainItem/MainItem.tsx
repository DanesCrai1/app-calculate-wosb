import { memo } from 'react';
import './MainItem.scss';
import { useTheme } from 'App/providers/ThemeContext/ThemeContext';

export const MainItemSrc = {
    BEAM: require('shared/assets/image/Creates/beam.jpg'),
    BRONZE: require('shared/assets/image/Creates/bronze.jpg'),
    BULKHEAD: require('shared/assets/image/Creates/bulkhead.jpg'),
    CANVAS: require('shared/assets/image/Creates/canvas.jpg'),
    PLATES: require('shared/assets/image/Creates/plates.jpg'),
}

interface MainItemProps {
    src?: any;
    alt?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickKey: (e: any) => void;
    btnClick?: (e) => void;
    btnName?: string;
    value: string;
    name?: string;
}

const MainItem = (props: MainItemProps) => {
    const {
        src,
        alt,
        onChange,
        onClickKey,
        value,
        name,
        btnClick,
        btnName
    } = props;
    const { theme } = useTheme();
    
    return (
        <div className='wrapper_block_place'>
            <div className='block_place'>
                <img src={src} alt={alt} className={`img_create_${theme}`}/>
                <div className='place_calc'>
                <input type="number" placeholder="" className='place_input' value={value} onChange={onChange} onKeyUp={onClickKey} name={name} />
                <button onClick={btnClick} name={btnName} className='place_btn'>Рассчитать</button>
                </div>
            </div>
        </div>
    );
};

export default memo(MainItem);