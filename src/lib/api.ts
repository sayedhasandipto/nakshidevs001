const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function fetchAdminData(endpoint: string) {
  try {
    // Add no-store cache to always fetch the latest data for admin panel
    const res = await fetch(`${API_URL}/api/admin${endpoint}`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    return null;
  }
}
