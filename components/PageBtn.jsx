import CreateButtons from "./CreateButtons";
import styles from '../styles/PageBtn.module.scss';

const RenderButtons = (props) => {
    let { buttons } = props;

    return <div className={styles.btn}>
        {
            buttons.map(
                (item, index) => 
                <CreateButtons key={index} {...item}>
                    {item.label}
                </CreateButtons>
            )
        }
    </div>
}

export default function PageBtn() {
    let buttons = [
        {
            label: 'Синяя кнопка',
            color: 'blue'
        },
        {
            label: 'Синяя большая кнопка',
            color: 'blue',
            width: '100%',
        },
        {
            label: 'Красная кнопка',
            color: 'red'
        },
        {
            label: 'Красная большая кнопка',
            color: 'red',
            width: '80%',
        },
        {
            label: 'Серая кнопка',
            color: 'gray'
        },
        {
            label: 'Серая большая кнопка',
            color: 'gray',
            width: '60%',
        },
    ]

    return <>
        <RenderButtons buttons={buttons} />
    </>
}