import React, {useState} from 'react';
import './Menu.scss'
import MenuItem from "./components/menu item/MenuItem";

import house from "../../assets/navbar/house.svg"
import magnifier from "../../assets/navbar/magnifier.svg"
import table from "../../assets/navbar/table.svg"
import calendar from "../../assets/navbar/calendar.svg"
import widgets from "../../assets/navbar/widgets.svg"
import settings from "../../assets/navbar/settings.svg";
import arrow from "../../assets/navbar/upArrow.svg"
import user from "../../assets/navbar/user.svg";
import phone from "../../assets/navbar/phone.svg";
import exit from "../../assets/navbar/exit.svg";


const Menu = () => {
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)

    return (
        <nav className={"menuContainer"} id={"menu"}>
            <span className={"menuSpan"}>Меню</span>
            <MenuItem icon={house} title={"Главная"} key={0} link={"/"}/>
            <MenuItem icon={magnifier} title={"Поиск адресов"} key={1} link={"/address"}/>
            <MenuItem icon={table} title={"Таблицы"} key={2} link={"/tables"}/>
            <MenuItem icon={calendar} title={"Календарь"} key={3} link={"/calendar"}/>
            <MenuItem icon={settings} title={"Настройки"} key={4} open={settingsOpen} setOpen={setSettingsOpen} parent secondIcon={arrow}/>
            {settingsOpen &&
                <>
                    <MenuItem icon={user} title={"Настройки профиля"} link={"/user"} child key={5}/>
                    <MenuItem icon={phone} title={"Управление финансами"} link={"/finance"} child key={6}/>
                </>
            }
            <MenuItem icon={widgets} title={"Карты"} key={7} link={"/map"} />
            <MenuItem icon={exit} title={"Выход"} key={8} link={"/logout"} />
        </nav>
    );
};

export default Menu;
