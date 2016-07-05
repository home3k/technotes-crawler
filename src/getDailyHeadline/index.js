import getGithub from './getGithub'
import getHN from './getHN'
import getMedium from './getMedium'
import getReddit from './getReddit'
import getV2 from './getV2'

export default async function getDailyHeadline() {
  const [HN, reddit, github, v2ex] = await Promise.all([
    getHN(), getReddit(), getGithub(), getV2()
  ])

  return {HN, reddit, github, v2ex}
}
