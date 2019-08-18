package hansol.server.service;

import org.springframework.data.redis.core.HashOperations;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class RedisServiceImpl implements RedisService {

    private HashOperations<String, String, String> hop;

    RedisServiceImpl(HashOperations<String, String, String> hop) {
        this.hop = hop;
    }

    @Override
    public void hsetnx(String key, String field, String value) {
        hop.putIfAbsent(key, field, value);
    }

    @Override
    public boolean hexists(String key, String field) {
        return hop.hasKey(key, field);
    }

    @Override
    public void hincrby(String key, String field, String increment) {
        if (hop.increment(key, field, Long.parseLong(increment)) == 0L) {
            hop.delete(key, field);
        }
    }

    @Override
    public void hdel(String key, String field) {
        hop.delete(key, field);
    }

    @Override
    public Set<String> hkeys(String key) {
        return hop.keys(key);
    }

    @Override
    public void addSearch(String key, String search) {
        hop.putIfAbsent(key, search, "0");
        hop.increment(key, search, 1);
    }

    @Override
    public void removeSearch(String key, String search) {
        if (hop.increment(key, search, -1L) == 0L) {
           hop.delete(key, search);
        }
    }
}
