import RequestUrl from './BaseUrl';
import BaseRequest from '../utils/request';

class IndexPageService{
  async test(paramJson) {
    console.log(RequestUrl.testURL)
		const res = await BaseRequest.fetch(`http://suggest.taobao.com/sug?code=utf-8&q=水`, {
			method: "GET",
			// body: JSON.stringify(paramJson)
    });
  }
}
export default new IndexPageService();