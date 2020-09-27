
export default (req, res) => {
    const {
        query:{id},
    }=req;
    const student = {id,name:"john doe"}
    res.end(JSON.stringify({student}));
    };
  