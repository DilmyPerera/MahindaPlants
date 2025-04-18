package lk.ac.vau.fas.service.interf;

import lk.ac.vau.fas.dto.LoginRequest;
import lk.ac.vau.fas.dto.Response;
import lk.ac.vau.fas.dto.UserDto;
import lk.ac.vau.fas.entity.User;

public interface UserService {
	Response registerUser(UserDto registrationRequest);
    Response loginUser(LoginRequest loginRequest);
    Response getAllUsers();
    User getLoginUser();
    Response getUserInfoAndOrderHistory();
}
