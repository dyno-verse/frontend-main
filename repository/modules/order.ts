import HttpFactory from "~/repository/factory";
import {IApiResponse} from "~/repository/models/appData";
import {IOrders} from "~/repository/models/ApiResponse";
import {IOrder} from "~/repository/models/ApiResponse";


class OrdersModule extends HttpFactory {
    private RESOURCE = 'orders';


    async createOrder(request: IOrder) {
        return await this.call<IApiResponse<IOrders>>('POST', `${this.RESOURCE}`, request)
    }


}

export default OrdersModule;
