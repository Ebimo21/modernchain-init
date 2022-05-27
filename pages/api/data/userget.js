import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default  async(req, res) =>{

    
    const userData =JSON.parse(req.body);

        const users = await prisma.user.create({
            data: {
                // name: 'HIs',
                email: userData,
            },
        })
    res.json(users)
  }