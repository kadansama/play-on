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
    {title: "Movies", road: '/movies', imgPath: Movies},
    {title: "Series", road: '/series', imgPath: Series},
    {title: "Cartoons", road: '/cartoons', imgPath: Cartoons},
    {title: "Top", road: '/top', imgPath: Top},
    {title: "Download", road: '/profile/downloaded', imgPath: Download},
    {title: "New", road: '/new', imgPath: New},
    {title: "Like", road: '/like', imgPath: Like},
    {title: "Looked", road: '/alreadyWatched', imgPath: Looked},

]