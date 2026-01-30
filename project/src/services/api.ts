const API_BASE_URL = '/api';

export const api = {
  incidents: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/incidents`);
      if (!response.ok) throw new Error('Failed to fetch incidents');
      return response.json();
    },

    getById: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/incidents/${id}`);
      if (!response.ok) throw new Error('Failed to fetch incident');
      return response.json();
    },

    assign: async (id: string, assignee: string) => {
      const response = await fetch(`${API_BASE_URL}/incidents/${id}/assign`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assignee }),
      });
      if (!response.ok) throw new Error('Failed to assign incident');
      return response.json();
    },
  },

  sensors: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/sensors`);
      if (!response.ok) throw new Error('Failed to fetch sensors');
      return response.json();
    },

    getById: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/sensors/${id}`);
      if (!response.ok) throw new Error('Failed to fetch sensor');
      return response.json();
    },

    getTimeseries: async (id: string, startDate?: string, endDate?: string) => {
      const params = new URLSearchParams();
      if (startDate) params.append('start', startDate);
      if (endDate) params.append('end', endDate);

      const response = await fetch(
        `${API_BASE_URL}/sensors/${id}/timeseries?${params.toString()}`
      );
      if (!response.ok) throw new Error('Failed to fetch sensor timeseries');
      return response.json();
    },
  },

  insights: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/insights`);
      if (!response.ok) throw new Error('Failed to fetch insights');
      return response.json();
    },
  },

  cctv: {
    getSnapshot: async (cameraId: string) => {
      const response = await fetch(`${API_BASE_URL}/cctv/snapshot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cameraId }),
      });
      if (!response.ok) throw new Error('Failed to capture snapshot');
      return response.json();
    },
  },
};

export default api;
