import supertest from "supertest"
import config from "../../config"
const { url } = config


/* eslint-disable */

//Контроллер User

const user = {
    //
    token: '',

    //Create user

    async createUser(payload) {
        const res = await supertest(url)
            .post('/Account/v1/User')
            .set('accept', 'application/json')
            .send(payload)
        return res
    },

    //Get user
    async getUser(uuid) {
        //console.log("getUser " + user.token)
        const res = await supertest(url)
            .get(`/Account/v1/User/${uuid}`)
            .set('accept', 'application/json')
            .set('Authorization', `Bearer ${this.token}`)
        return res
    },

    //Delete user
    async deleteUser(uuid) {
        const res = await supertest(url)
            .delete(`/Account/v1/User/${uuid}`)
            .set('accept', 'application/json')
        return res.body
    },

    //Функция получения токена
    getToken: () => {
        return supertest(url)
            .post('/Account/v1/GenerateToken')
            .set('accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(config.credentials)
    },

    async getAuthToken() {
        const res = await this.getToken(config.credentials)
        user.token = res.body.token
        return res.body.token
    },

    //Функция авторизации с полученным токеном
    authorization: (payload) => {
        return supertest(url)
            .post('/Account/v1/Authorized')
            .set('accept', 'application/json')
            .set('authorization', `Bearer ${user.token}`)
            .send(payload)
    }
}
export default user