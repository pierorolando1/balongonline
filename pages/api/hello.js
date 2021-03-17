// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {

  const games = [{
    MadridVsPorto : {
      link1: 'algodasdaa.com',
      link2: 'algodasdaa.com',
      link3: 'algodasdaa.com'
    }
  }]

  res.status(200).json(games)
}
