namespace Collection {
	template <typename TKey, typename TVal> class Dictionary {
		std::vector<std::pair<TKey, TVal>> list;
	public:
		Dictionary() {}
		inline size_t Count() { return list.size(); }
		inline size_t Length() { return Count(); }
		inline size_t Size() { return Count(); }
		inline void Clear() { list.clear(); }
		bool ContainsKey(TKey key) {
			for (auto & v : list)
				if (v.first == key) return 1;
			return 0;
		}
		bool ContainsValue(TVal val) {
			for (auto & v : list)
				if (v.second == val) return 1;
			return 0;
		}
		bool Add(TKey key, TVal val) {
			bool a = 0;
			if (!ContainsKey(key))
				list.push_back(std::make_pair(key, val)), a = 1;
			return a;
		}
		bool Remove(TKey key) {
			for (auto i = 0; i < list.size(); i++)
				if (list.at(i).first == key)
					return list.erase(list.begin() + i), 1;
			return 0;
		}
		std::vector<TKey> Keys() {
			std::vector<TKey> v;
			for (auto & V : list)
				v.push_back(V.first);
			return v;
		}
		std::vector<TVal> Values() {
			std::vector<TVal> v;
			for (auto & V : list)
				v.push_back(V.second);
			return v;
		}
	};
}
