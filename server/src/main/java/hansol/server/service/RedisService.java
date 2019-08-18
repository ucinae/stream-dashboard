package hansol.server.service;

import java.util.Set;

public interface RedisService {

    /**
     * 집합에 member 추가
     *
     * @param key
     * @param member
     */
    void sadd(String key, String member);

    /**
     * 집합의 member 삭제
     *
     * @param key
     * @param member
     * @return
     */
    Long srem(String key, String member);

    /**
     * 모든 멤버 조회
     * @param key
     * @return
     */
    Set<String> smembers(String key);
}
