const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchProjects() {
  try {
    const res = await fetch(`${API_URL}/projects`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch projects');
    return await res.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function fetchSkills() {
  try {
    const res = await fetch(`${API_URL}/skills`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch skills');
    return await res.json();
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

export async function fetchExperience() {
  try {
    const res = await fetch(`${API_URL}/experience`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch experience');
    return await res.json();
  } catch (error) {
    console.error('Error fetching experience:', error);
    return [];
  }
}

export async function fetchEducation() {
  try {
    const res = await fetch(`${API_URL}/education`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch education');
    return await res.json();
  } catch (error) {
    console.error('Error fetching education:', error);
    return [];
  }
}

export async function submitContact(data: any) {
  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to submit contact');
    return await res.json();
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw error;
  }
}
