import axios, { AxiosError } from 'axios';

export const API_ORIGIN =
  process.env.NODE_ENV === 'development'
    ? 'http://ec2-13-124-170-69.ap-northeast-2.compute.amazonaws.com:8080'
    : 'http://ec2-13-124-170-69.ap-northeast-2.compute.amazonaws.com:8080';

axios.defaults.baseURL = `${API_ORIGIN}/api/v1`;

axios.defaults.validateStatus = function (status) {
  return status <= 500;
};

axios.interceptors.request.use(
  (req) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[AxiosRequest]', req);
    }

    return req;
  },
  (err) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('[AxiosError]', err);
    }

    return err.response;
  },
);

axios.interceptors.response.use(
  async (res) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[AxiosResponse]', res);
    }

    return res;
  },
  (err: AxiosError) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('[AxiosError]', err);
    }

    return err.response;
  },
  {
    synchronous: true,
  },
);

export const apiRoute = {
  health: '/health',
  auth: {
    checkEmail: '/auth/dup/email',
    checkId: '/auth/dup/loginId',
    authCodeSend: '/auth/emailAuth',
    checkCode: '/auth/emailAuth/code',
    login: '/auth/login',
    findId: '/auth/loginId',
    findPassword: 'auth/password',
    refresh: '/auth/reissue',
    signup: '/auth/signup',
    kakao: '/auth/kakao?',
  },
  member: {
    loadProfile: '/members',
    updateAlarm: '/members/agree/alarm',
    updateMarketing: '/members/agree/marketing',
    updateProfil: '/members/photos',
    updatePassword: '/members/password',
    deleteMember: '/members',
    setMbti: '/members/mbti?mbti=',
  },
  memo: {
    loadMemo: '/memos',
    addMemo: '/memos',
  },
  diary: {
    loadDiary: '/diary',
    loadDiaryDate: '/diary/date',
  },
  hangangNow: {
    loadData: '/hangangnow',
  },
  parking: {
    loadParkings: '/parkings',
    loadParkingMaps: '/parkings/map',
  },
  picnic: {
    loadFindResult: '/picnic/recom/course',
    loadFindDetail: '/picnic/course/',
  },
  event: {
    loadEvent: '/events',
    loadEventDetail: '/events/',
  },
  flyer: {
    loadFlyer: '/flyers',
  },
};

export type BasicResponse<T> = {
  data: T;
  config: {
    status: number;
  };
};

export function requestGet<T>(
  url: string,
  header: object,
): Promise<BasicResponse<T>> {
  return axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}

export function requestSecureGet<T>(
  url: string,
  header: object,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}

export function requestDelete<T>(
  url: string,
  header: object,
): Promise<BasicResponse<T>> {
  return axios
    .delete(url, {
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}

export function requestSecureDelete<T>(
  url: string,
  header: object,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}

export function requestSecurePost<T>(
  url: string,
  header: object,
  body: object,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}

export function requestPost<T>(
  url: string,
  header: object,
  body: object,
): Promise<BasicResponse<T>> {
  return axios
    .post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}

export function requestSecurePut<T>(
  url: string,
  header: object,
  body: object,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .put(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}

export function requestPut<T>(
  url: string,
  header: object,
  body: object,
): Promise<BasicResponse<T>> {
  return axios
    .put(url, body, {
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}

export function requestSecurePatch<T>(
  url: string,
  header: object,
  body: object,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .patch(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}
