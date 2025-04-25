package lk.ac.vau.fas.service.interf;

import lk.ac.vau.fas.dto.AddressDto;
import lk.ac.vau.fas.dto.Response;

public interface AddressService {

	Response saveAndUpdateAddress(AddressDto addressDto);
	
}
