package hansol.server.controller;

import hansol.server.service.RedisService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Slf4j
@Controller
public class WebSocketController {

    private final static String NAVER_REDIS_KEY = "naver";
    private final static String YOUTUBE_REDIS_KEY = "youtube";
    private final static String TWITTER_REDIS_KEY = "twitter";

    private RedisService redisService;

    WebSocketController(RedisService redisService) {
        this.redisService = redisService;
    }

    @MessageMapping("/hello")
    @SendTo("/topic/hello")
    public String hello(String hello) {
        log.info("this is hello() : " + hello);
        return hello;
    }

    @MessageMapping("/naver/search")
    public void addNaverSearch(String search) {
        log.info("new naver search word : {}", search);
        redisService.sadd(NAVER_REDIS_KEY, search);
    }

    @MessageMapping("/youtube/search")
    public void addYoutubeSearch(String search) {
        log.info("new youtube search word : {}", search);
        redisService.sadd(YOUTUBE_REDIS_KEY, search);
    }

    @MessageMapping("/twitter/search")
    public void addTwitterSearch(String search) {
        log.info("new twitter search word : {}" ,search);
        redisService.sadd(TWITTER_REDIS_KEY, search);
    }

    @MessageMapping("/naver/remove")
    public void removeNaverSearch(String search) {
        log.info("remove naver search word : {}", search);
        redisService.srem(NAVER_REDIS_KEY, search);
    }

    @MessageMapping("/youtube/remove")
    public void removeYoutubeSearch(String search) {
        log.info("remove youtube search word : {}", search);
        redisService.srem(YOUTUBE_REDIS_KEY, search);
    }

    @MessageMapping("/twitter/remove")
    public void removeTwitterSearch(String search) {
        log.info("remove twitter search word : {}", search);
        redisService.srem(TWITTER_REDIS_KEY, search);
    }
}
