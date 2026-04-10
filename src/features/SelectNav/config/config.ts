import { Road } from "../types";
import { ReactComponent as Movies } from "@assets/images/selectNav/movies.svg";
import { ReactComponent as Series } from "@assets/images/selectNav/series.svg";
import { ReactComponent as Cartoons } from "@assets/images/selectNav/cartoons.svg";
import { ReactComponent as Top } from "@assets/images/selectNav/top.svg";
import { ReactComponent as Download } from "@assets/images/selectNav/download.svg";
import { ReactComponent as New } from "@assets/images/selectNav/new.svg";
import { ReactComponent as Like } from "@assets/images/selectNav/like.svg";
import { ReactComponent as Looked } from "@assets/images/selectNav/movies.svg";

export const data: Road[] = [
    {title: "\u0424\u0438\u043b\u044c\u043c\u044b", road: '/movies', imgPath: Movies},
    {title: "\u0421\u0435\u0440\u0438\u0430\u043b\u044b", road: '/series', imgPath: Series},
    {title: "\u041c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c\u044b", road: '/cartoons', imgPath: Cartoons},
    {title: "\u0422\u043e\u043f", road: '/top', imgPath: Top},
    {title: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c", road: '/profile/downloaded', imgPath: Download},
    {title: "\u041d\u043e\u0432\u043e\u0435", road: '/new', imgPath: New},
    {title: "\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f", road: '/like', imgPath: Like},
    {title: "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u043e\u0435", road: '/alreadyWatched', imgPath: Looked},

]