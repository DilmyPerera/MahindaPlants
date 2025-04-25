package lk.ac.vau.fas.service.impl;

import org.springframework.stereotype.Service;

import lk.ac.vau.fas.dto.AddressDto;
import lk.ac.vau.fas.dto.Response;
import lk.ac.vau.fas.entity.Address;
import lk.ac.vau.fas.entity.User;
import lk.ac.vau.fas.repository.AddressRepo;
import lk.ac.vau.fas.service.interf.AddressService;
import lk.ac.vau.fas.service.interf.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService{
	 private final AddressRepo addressRepo;
	    private final UserService userService;


	    @Override
	    public Response saveAndUpdateAddress(AddressDto addressDto) {
	        User user = userService.getLoginUser();
	        Address address = user.getAddress();

	        if (address == null){
	            address = new Address();
	            address.setUser(user);
	        }
	        if (addressDto.getStreet() != null) address.setStreet(addressDto.getStreet());
	        if (addressDto.getCity() != null) address.setCity(addressDto.getCity());
	        if (addressDto.getState() != null) address.setState(addressDto.getState());
	        if (addressDto.getZipCode() != null) address.setZipCode(addressDto.getZipCode());
	        if (addressDto.getCountry() != null) address.setCountry(addressDto.getCountry());

	        addressRepo.save(address);

	        String message = (user.getAddress() == null) ? "Address successfully created" : "Address successfully updated";
	        return Response.builder()
	                .status(200)
	                .message(message)
	                .build();
	    }

}

