import React, {useState} from 'react';
import style from './Select.module.css'


type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select: React.FC<SelectPropsType> = (props) => {

    const selectedItem = props.items.find(i => i.value === props.value)

    const [active, setActive] = useState(false)

    const onClickItems = () => setActive(!active)

    return (
        <div className={style.select}>
            <span className={style.main} onClick={onClickItems}>{selectedItem && selectedItem.title}</span>
            {
                active && <div className={style.items}>
                    {props.items.map(i =>
                        <div
                            onClick={() => props.onChange(i.value)}
                            key={i.value}
                        >{i.title}
                        </div>
                    )}
                </div>
            }
        </div>
    );
};
