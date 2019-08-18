package hansol.server.service;

import java.util.Set;

public interface RedisService {

    void hsetnx(String key, String field, String value);

    /**
     * field가 존재하는지 확인
     *
     * @param key
     * @param field
     * @return
     */
    boolean hexists(String key, String field);

    /**
     * field를 increment 만큼 증가
     *
     * @param key
     * @param field
     * @param increment
     */
    void hincrby(String key, String field, String increment);

    /**
     * field 삭제
     *
     * @param key
     * @param field
     */
    void hdel(String key, String field);

    /**
     * 모든 field를 조회
     *
     * @param key
     * @return
     */
    Set<String> hkeys(String key);

    /**
     * 새로운 검색어 추가
     * 없으면 0으로 초기화하고
     * 값 1 증가
     *
     * @param key
     * @param search
     */
    void addSearch(String key, String search);

    /**
     * 검색어 제거
     * 검색어 값 1 감소시키고
     * 값이 0 이면 제거
     *
     * @param key
     * @param search
     */
    void removeSearch(String key, String search);
}
