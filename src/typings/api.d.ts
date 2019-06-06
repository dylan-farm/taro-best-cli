declare namespace API {
  export interface Response {
    data: any;
    errMsg: string;
    statusCode: number;
    header: any;
  }

  // export interface RequestType {
  //   env: any;
  //   defaultOptions: object;
  // }
  export interface RequrestParams {
    url: string;
    data?: object;
    contentType?: string;
    method?: "GET" | "OPTIONS" | "POST";
    header?: object;
    isShowLoading?: boolean;
    loadingText?: string;
  }
}
