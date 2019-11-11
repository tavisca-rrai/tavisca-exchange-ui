import { Category } from './category';
import { BaseResponse } from './base-response';

export class GetCategoryResponse extends BaseResponse {
    categories: Category[];
}
