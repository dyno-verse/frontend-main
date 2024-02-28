import HttpFactory from "~/repository/factory";
import {IBusinessInfo, IMenu, IMenuDetail} from "~/repository/models/ApiResponse";

class MenuModule extends HttpFactory {
    private RESOURCE = '/menu';

    // https://api.dynomenu.com/menu/ab7c92d5-1a13-4012-a57a-99e9cb465d83/detailed


    // async getBusinessInfoBySlug(slug: string): Promise<IBusinessInfo> {
    //     return await this.call<IBusinessInfo>('GET', `${this.RESOURCE}/${slug}`)
    // }

    async getMenusByBusinessId(id: string) {
        return await this.call<IMenu>('GET', `${this.RESOURCE}/${id}`)
    }


    async getMenuItems(menuId: string) {
        return await this.call<IMenuDetail>('GET', `${this.RESOURCE}/${menuId}/detailed`)
    }
}

export default MenuModule;
