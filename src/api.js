import axios from 'axios'

export function fetchLastestNews() {
    return axios.get('https://www.reckful.net/api/4/news/latest')
}

export function fetchThemes(){
    return axios.get('https://www.reckful.net/api/4/themes')
}

export function fetchBeforeNews(date){
    return axios.get('https://www.reckful.net/api/4/news/before/'+date)
}

export function fetchNewsContent(id){
    return axios.get('https://www.reckful.net/api/4/news/'+id)
}

export function fetchStoryExtra(id){
    return axios.get('https://www.reckful.net/api/4/story-extra/'+id)
}

export function fetchShortComments(id){
    return axios.get('https://www.reckful.net/api/4/story/'+id+'/short-comments')
}

export function fetchBeforeComments(id,lastId){
    return axios.get('https://www.reckful.net/api/4/story/'+id+'/short-comments/before/'+lastId)
}

export function fetchThemesList(id){
    return axios.get('https://www.reckful.net/api/4/theme/'+id)
}