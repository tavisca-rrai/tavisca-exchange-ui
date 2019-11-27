
import { BaseResponse } from './base-response';
import { Category } from './category';

export class GetCategoryResponse extends BaseResponse {
    categories: Category[];
}
