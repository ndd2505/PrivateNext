import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import { query } from '../../lib/db'
import {fnGetV2} from 'api/'

const filter = new Filter()

const handler: NextApiHandler = async (req, res) => {
    return await fnGetV2('http://localhost:3000', '/telegram', {});
}
export default handler
