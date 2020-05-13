import request from 'superagent';

const URL = 'http://localhost:3001';

export const getParticle = async (id) => {
    const data = await request.get(`${URL}/particles/${id}`)

    return data.body;
}

export const getParticles = async () => {
    const data = await request.get(`${URL}/particles/`)

    return data.body;
}

export const addParticles = async (particle) => {
    const data = await request.post(`${URL}/particles/`, particle)

    return data.body;
}