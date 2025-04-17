//This used to transfer data between the server and the client
package lk.ac.vau.fas.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {
	
private Long id;
	
	private String street;
	private String city;
	private String state;
	private String zipCode;
	private String country;
	


	private UserDto user;
	


	//private final LocalDateTime createdAt;
	private  LocalDateTime createdAt;

}
