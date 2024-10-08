package com.app.respository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

//import com.app.entities.Vendor;
//import com.app.entities.VendorProducts;

import com.app.entities.Vendor;
import com.app.entities.VendorProducts;
import com.app.dto.*;
import java.lang.Long;
public interface VendorProductRepo extends JpaRepository<VendorProducts, Long>{


	
	VendorProducts findByProductName(String productName);
	
	VendorProductDto findByVendorProductId(Long vendorproductid);
	
	List<VendorProducts> findByVendor(Vendor vendor);
	
	
	@Query("SELECT new com.app.dto.HomeProdRespoDTO(vpp.productId,vp.productName,vp.productDesc,vp.productMfgDate,vp.productExpDate,vpp.productPrice, vpp.pq) from VendorProducts vp join vp.product vpp")
     List<HomeProdRespoDTO> listOfProd();
//public HomeProdRespoDTO(Long productId, String productName, String productDesc, LocalDate productMfgDate,
//LocalDate productExpDate, double productPrice) {
	
	@Query("SELECT new com.app.dto.CartProductDto(c.cartId,vpp.productName,vpp.pmanufacturer,c.qty,p.productPrice) from Cart c join c.product p join c.product.vendorProduct vpp where c.customer.customerId=:customerID")
	List<CartProductDto> listofCartProducts(Long customerID);
	
}	