package hansol.server.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Slf4j
@Controller
public class WebSocketController {

    @MessageMapping("/hello")
    @SendTo("/topic/hello")
    public String hello(String hello) {
        log.info("this is hello() : " + hello);
        return hello;
    }
}
