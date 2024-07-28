const asyncHandlerFunc = (func) => async (req, res, next) => {
   return Promise.resolve(await func(req,res,next)).catch((error)=>{
      res.status(error.code || 500).json({
         success: false,
         message: error.message,
      });
      return next(null)
   })
};

export { asyncHandlerFunc };
