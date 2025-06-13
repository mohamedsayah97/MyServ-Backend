export const Roles = {
    ADMIN: 'ADMIN',
    RH: 'RH',
};

export const inRole =
(...roles) =>
(req, res, next) => {
    const exist = roles.find(role => req.user.role === role);
    if (!exist) {
        return res.status(403).json({
            message: 'Not Allowed',
            status: 403
        });
    }  
    next();
}
