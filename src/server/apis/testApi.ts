import axios from 'axios';
import {TestResponse} from '../schemas/testSchema';
import HushItClient from '~/utils/axios';

export const getTest = async (): Promise<TestResponse | undefined> => {
  try {
    const {data} = await HushItClient.get('');

    return {id: ''};
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error) {
        console.log(error);

        return undefined;
      }
    } else {
      throw error;
    }
  }
};
