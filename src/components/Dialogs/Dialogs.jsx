import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.text}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem id="1" name="Артём Жвиков" />
                <DialogItem id="2" name="Александр Корнеев" />
                <DialogItem id="3" name="Юля Абашева" />
                <DialogItem id="4" name="Денис Лебедев" />
                <DialogItem id="5" name="Олег Кожевников" />
                <DialogItem id="6" name="Денис Мисуркин" />
            </div>
            <div className={classes.messages}>
                <Message text="Привет! Ну чё, идём сегодня отрываться?" />
                <Message text="Вчера начал прикольный проект." />
                <Message text="Не знаю, о чем новую статью написать." />
                <Message text="А, ну ясно" />
            </div>
        </div>
    )
}

export default Dialogs;