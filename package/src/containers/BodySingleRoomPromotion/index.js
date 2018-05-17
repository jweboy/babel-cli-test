import RoomFilter from '../../components/RoomFilter';
import { RoomInfoSingle } from '../../components/RoomInfo';
import { RoomTablePromotion } from '../../components/RoomTable';

export default {
    menu: {
        title: ['房源管理', '可招商'],
    },
    router: '/project/single/room/promotion',
    layout: layout => ({
        body: [
            RoomInfoSingle,
            ...layout.body,
            RoomFilter,
            RoomTablePromotion,
        ],
    }),
};
