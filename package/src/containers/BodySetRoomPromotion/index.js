import RoomFilter from '../../components/RoomFilter';
import { RoomInfoSet } from '../../components/RoomInfo';
import { RoomTablePromotion } from '../../components/RoomTable';

export default {
    menu: {
        title: ['房源管理', '可招商'],
    },
    router: '/project/set/room/promotion',
    layout: layout => ({
        body: [
            ...layout.body,
            RoomFilter,
            RoomInfoSet,
            RoomTablePromotion,
        ],
    }),
};


// 在creams-web3-shared内定义
const shared = {
    router: '/project/set',
    layout: layout => ({
        left: [
            'SetLeft'
        ],
        body: [
            // 'SetMenu', // 菜单栏应该写死，这个不可以更改
            'Breadcrumbs',
            'FilterDisplay',
        ],
    }),

}
