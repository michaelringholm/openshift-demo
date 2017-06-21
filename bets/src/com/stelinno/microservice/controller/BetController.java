package com.stelinno.microservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stelinno.microservice.entity.Bet;

@Controller

@RequestMapping("/bet")
public class BetController {
	
	@RequestMapping("/get")
	public @ResponseBody Bet GetBet() {
		Bet bet = new Bet();
		return bet;
	}
}
