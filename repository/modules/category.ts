import HttpFactory from "~/repository/factory";
import {IBusinessInfo} from "~/repository/models/ApiResponse";

class MenuCategoryModule extends HttpFactory {
    private RESOURCE = '/business/';

    async getBusinessInfoBySlug(slug: string): Promise<IBusinessInfo> {
        return await this.call<IBusinessInfo>('GET', `${this.RESOURCE}/${slug}`)
    }
}

export default MenuCategoryModule;
