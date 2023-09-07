import { FormatDate } from '~/utils/FormatDate';
import * as httpRequest from '~/utils/httpRequest';
export const GetData = async (data = {}) => {
  try {
    const res = await httpRequest.Get(`/dashboard/`, {
      params: {
        date: FormatDate(new Date(), true),
      },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};
export const GetStatistics_All = async (data = {}) => {
  try {
    const res = await httpRequest.Get(`/dashboard/statistic/all`);
    return res;
  } catch (error) {
    console.log('error');
  }
};
export const GetStatistics_Month = async (data = {}) => {
  try {
    const res = await httpRequest.Get(`/dashboard/statistic/month`, {
      params: {
        date: FormatDate(new Date(), true),
      },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};
export const GetStatistics_Year = async (data = {}) => {
  try {
    const res = await httpRequest.Get(`/dashboard/statistic/year`, {
      params: {
        date: FormatDate(new Date(), true),
      },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};
